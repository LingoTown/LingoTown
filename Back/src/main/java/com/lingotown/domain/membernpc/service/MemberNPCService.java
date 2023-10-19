package com.lingotown.domain.membernpc.service;

import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.membernpc.dto.request.CreateMemberNPCReqDto;
import com.lingotown.domain.membernpc.dto.response.ReadMemberNPCResDto;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.repository.MemberNPCRepository;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.npc.repository.NPCRepository;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.domain.world.entity.World;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberNPCService {

    private final MemberRepository memberRepository;
    private final TalkRepository talkRepository;
    private final NPCRepository npcRepository;
    private final MemberNPCRepository memberNPCRepository;

    //사용자가 대화를 나눈 모든 npc 조회
    public List<ReadMemberNPCResDto> readMemberNPCList(Principal principal){
        Long memberId = Long.valueOf(principal.getName());
        Member member = getMemberEntity(memberId);

        final List<MemberNPC> npcList = member.getMemberNPCList();

        List<ReadMemberNPCResDto> memberNPCResDtoList = new ArrayList<>();
        for(MemberNPC memberNPC : npcList){

            NPC npc =  memberNPC.getNpc();
            World world = npc.getWorld();

            List<Talk> talkList = talkRepository.findTalkList(memberNPC.getId());
            int count = talkList.size();

            if(count==0)  continue;

            ReadMemberNPCResDto memberNPCResDto = new ReadMemberNPCResDto(memberNPC.getId(), count,
                    memberNPC.getIntimacy(), npc.getId(),
                    world.getLanguage().toString(), world.getTheme().toString(),
                    talkList.get(0).getCreatedAt());

            memberNPCResDtoList.add(memberNPCResDto);
        }

        return memberNPCResDtoList;
    }

    //대화기록이 없는 NPC와 관계 만들기
    @Transactional
    public MemberNPC createMemberNPCConnect(Principal principal, CreateMemberNPCReqDto createMemberNPCReqDto){

        Long memberId = Long.valueOf(principal.getName());
        Long npcId = createMemberNPCReqDto.getNpcId();
        MemberNPC connectedMemberNPC = memberNPCRepository.findByMemberIdNPCId(memberId, npcId);

        if(connectedMemberNPC != null) return connectedMemberNPC;

        Member member = getMemberEntity(memberId);
        NPC npc = getNPCEntity(npcId);

        MemberNPC memberNPC = MemberNPC
                .builder()
                .member(member)
                .npc(npc)
                .build();

        MemberNPC newMemberNPC = memberNPCRepository.save(memberNPC);
        return newMemberNPC;
    }

    private NPC getNPCEntity(Long npcId){
        NPC npc = npcRepository.findById(npcId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.NPC_NOT_FOUND));

        return npc;
    }

    private Member getMemberEntity(Long memberId){
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));

        return member;
    }

}
