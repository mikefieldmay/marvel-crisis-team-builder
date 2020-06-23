import React from "react";
import { useCrisisState } from "../../context/CrisisTeamContext";
import { Character, InfinityGem } from "../../types";

export const AddOrRemoveButton: React.FC<{
  item: Character | InfinityGem;
  comparisonList: (Character | InfinityGem)[];
  addAction: (args: any) => void;
  removeAction: (args: any) => void;
  classes?: string[];
}> = ({ classes, item, comparisonList, addAction, removeAction }) => {
  const { dispatch } = useCrisisState();

  const isSelected = () => {
    return comparisonList.find(listItems => listItems.id === item.id);
  };

  const onButtonClick = () => {
    dispatch(isSelected() ? removeAction(item.id) : addAction(item.id));
  };

  return (
    <button className={classes && classes.join(" ")} onClick={onButtonClick}>
      {isSelected() ? "-" : "+"}
    </button>
  );
};
