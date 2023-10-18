package com.lingotown.domain.membernpc.service;

import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.membernpc.dto.response.GetMemberNPCResDto;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.repository.MemberNPCRepository;
import com.lingotown.domain.npc.npc.entity.NPC;
import com.lingotown.domain.talk.talk.entity.Talk;
import com.lingotown.domain.talk.talk.repository.TalkRepository;
import com.lingotown.domain.membernpc.dto.response.GetTalkListResDto;
import com.lingotown.domain.world.world.entity.World;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberNPCService {

    private final MemberRepository memberRepository;
    private final TalkRepository talkRepository;
    private final MemberNPCRepository memberNPCRepository;

    //사용자가 대화를 나눈 모든 npc 조회
    public List<GetMemberNPCResDto> getMemberNPCList(Long memberId){
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));

        final List<MemberNPC> npcList = member.getMemberNPCList();

        List<GetMemberNPCResDto> memberNPCResDtoList = new ArrayList<>();
        for(MemberNPC memberNPC : npcList){

            NPC npc =  memberNPC.getNpc();
            World world = npc.getWorld();
            List<Talk> talkList = talkRepository.findTalkList(npc.getId());
            int count = talkList.size();

            GetMemberNPCResDto memberNPCResDto = new GetMemberNPCResDto(memberNPC.getId(),
                    memberNPC.getIntimacy(), count,
                    npc.getId(), world.getLanguage().toString(), world.getTheme().toString(),
                    talkList.get(0).getCreatedAt());

            memberNPCResDtoList.add(memberNPCResDto);
        }

        return memberNPCResDtoList;
    }


    //해당 NPC와 대화 내역
    public List<GetTalkListResDto> getTalkList(Long memberNPCId){
        getMemberNPCEntity(memberNPCId);

        List<GetTalkListResDto> talkListResDtoList = new ArrayList<>();

        List<Talk> talkList = memberNPCRepository.findAllByTalkListDeleteAtIsNullAndId(memberNPCId);
        for(Talk talk : talkList){
            talkListResDtoList.add(new GetTalkListResDto(talk.getId(), talk.getCreatedAt()));
        }

        return talkListResDtoList;
    }





    private MemberNPC getMemberNPCEntity(Long memberNPCId){
        MemberNPC memberNPC = memberNPCRepository.findById(memberNPCId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NPC_NOT_FOUND));

        return memberNPC;
    }

}
