package com.lingotown.domain.talk.service;

import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.talk.dto.response.ReadMemberNPCResDto;
import com.lingotown.domain.talk.entity.MemberNPC;
import com.lingotown.domain.talk.repository.MemberNPCRepository;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.npc.repository.NPCRepository;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.domain.world.entity.World;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
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
    public DataResponse<List<ReadMemberNPCResDto>> readMemberNPCList(Principal principal){
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

            ReadMemberNPCResDto memberNPCResDto = ReadMemberNPCResDto
                    .builder()
                    .memberNPCId(memberNPC.getId())
                    .talkCount(count)
                    .intimacy(memberNPC.getIntimacy())
                    .npcId(npc.getId())
                    .npcName(npc.getName())
                    .npcImage(npc.getNpcImage())
                    .language(world.getLanguage().toString())
                    .theme(world.getTheme())
                    .lastVisited(talkList.get(0).getCreatedAt())
                    .build();

            memberNPCResDtoList.add(memberNPCResDto);
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberNPCResDtoList);
    }

    //대화기록이 없는 NPC와 관계 만들기
    @Transactional
    public MemberNPC createMemberNPCConnect(Principal principal, Long npcId){

        Long memberId = Long.valueOf(principal.getName());
        MemberNPC connectedMemberNPC = memberNPCRepository.findByMemberIdNPCId(memberId, npcId);

        if(connectedMemberNPC != null) return connectedMemberNPC;

        Member member = getMemberEntity(memberId);
        NPC npc = getNPCEntity(npcId);

        MemberNPC memberNPC = MemberNPC
                .builder()
                .member(member)
                .npc(npc)
                .build();

        return memberNPCRepository.save(memberNPC);
    }

    private NPC getNPCEntity(Long npcId){
        return npcRepository.findById(npcId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.NPC_NOT_FOUND));

    }

    private Member getMemberEntity(Long memberId){
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));
    }

}
