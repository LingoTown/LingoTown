import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getMemberNpcRelationship } from "../../api/NPC";
import { intimacyAtom } from "../../atom/IntimacyAtom";
import { intimacyType } from "../../type/IntimacyType";

export const useFetchIntimacy = () => {
  const [intimacy, setIntimacy] = useRecoilState(intimacyAtom);
  const [flag, setFlag] = useState<number>(0);

  useEffect(
    () => {
      const fetchIntimacyInfo = async () => {
        await getMemberNpcRelationship(
          ({ data }: any) => {
            const result = data.data as intimacyType[];
            setIntimacy(prev => ({
              ...prev,
              npcList: result
            }));
            console.log("fetchIntimacyInfo 완료");
            setFlag(f => f + 1);
          },
          error => {
            console.log(error);
          }
        );
      };

      fetchIntimacyInfo();
    },
    [setIntimacy]
  );

  return { intimacy, flag };
};

export default useFetchIntimacy;
