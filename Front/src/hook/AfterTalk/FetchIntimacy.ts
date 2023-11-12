import { useRecoilState } from "recoil";
import { getMemberNpcRelationship } from "../../api/NPC";
import { intimacyAtom } from "../../atom/IntimacyAtom";
import { intimacyType } from "../../type/IntimacyType";
import { useState, useEffect } from "react";

const [intimacy, setIntimacy] = useRecoilState(intimacyAtom);
const [flag, setFlag] = useState<number>(0);

const fetchIntimacy = () => {
  /* 친밀도 정보 가져오기 */
  const fetchIntimacyInfo = async () => {
    await getMemberNpcRelationship(
      ({ data }: any) => {
        const result = data.data as intimacyType[];

        setIntimacy(prev => ({
          ...prev,
          npcList: result
        }));

        console.log("fetchIntimacyInfo 완료");
        console.log(flag);
        setFlag(f => f + 1);
        console.log(flag);
      },
      error => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    fetchIntimacyInfo();
  }, []);

  return { intimacy, flag };
};

export default fetchIntimacy;
