import React from "react";
import { useSelector } from "react-redux";
import { getMainSections } from "../../store/selectors/appMainSections";
import WorkStages from "../../components/WorkStages/Main/WorkStages";

const MainPage = () => {
  const sectionsFromDB = useSelector(getMainSections).filter(
    (section) => !section.disabled
  );
  const sectionsComponents = [WorkStages];

  const mapComponentsToRender = () => {
    return sectionsFromDB.map((section) => {
      const { description, _id: id, heading, name, reactComponent } = section;
      const Component = sectionsComponents.find(
        (component) => component.name === reactComponent
      );

      if (Component) {
        return (
          <Component
            description={description}
            heading={heading}
            anchorName={name}
            key={id}
          />
        );
      }
      return null;
    });
  };

  const filteredReadySections = mapComponentsToRender().filter(
    (i) => i !== null
  );

  return <div>{filteredReadySections}</div>;
};

export default MainPage;
