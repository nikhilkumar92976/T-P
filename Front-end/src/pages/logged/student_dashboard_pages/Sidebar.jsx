import React, { useEffect, useState } from "react";

import {
  Home,
  BarChart3,
  Trophy,
  GraduationCap,
  Wrench,
  FolderOpen,
  FileText,
  Clock,
  Target,
  Code,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  History,
  NotebookPen,
  Clock10,
  Calculator,
  Brain,
  Snowflake,
  Speech,
  CodeXml,
  ChartArea,
  FolderDot,
  Award,
} from "lucide-react";

const menuItems = [
  {
    id: "home",
    label: "Home",
    icon: <Home size={16} />,
    children: [
      {
        id: "analysis",
        label: "Analysis",
        icon: <ChartArea size={16} />,
        directTo: "dashboard/analysis",
      },
      {
        id: "student-skills",
        label: " Skills",
        icon: <FolderDot size={16} />,
        directTo: "dashboard/skills",
      },
      {
        id: "Certifications-Project",
        label: "Certifications",
        icon: <Award size={16} />,
        directTo: "dashboard/certifications-projects",
      },
    ],
  },
  {
    id: "tests",
    label: "Tests",
    icon: <FileText size={16} />,
    children: [
      {
        id: "Ongoing-tests",
        label: " Ongoing Tests",
        icon: <NotebookPen size={16} />,
        directTo: "dashboard/ongoing-tests",
      },
      {
        id: "Daily Assgnments",
        label: "Daily Assgnments",
        icon: <Clock10 size={16} />,
        directTo: "dashboard/dails-works",
      },
      {
        id: "tests-history",
        label: " Tests History",
        icon: <History size={16} />,
        directTo: "dashboard/test-history",
      },
    ],
  },
  {
    id: "practice",
    label: "Practice",
    icon: <Target size={16} />,
    children: [
      {
        id: "Quantative Aptitude",
        label: "Quantative Aptitude",
        icon: <Calculator size={16} />,
        directTo: "dashboard/quantative-aptitude",
      },
      {
        id: "Logical Aptitude",
        label: "Logical Aptitude",
        icon: <Brain size={16} />,
        directTo: "dashboard/logical-aptitud",
      },
      {
        id: "Core undamentals",
        label: "Core undamentals",
        icon: <Snowflake size={16} />,
        directTo: "dashboard/core-fundamentals",
      },
      {
        id: "Verbal Practice",
        label: "Verbal Practice",
        icon: <Speech size={16} />,
        directTo: "dashboard/verbal-practice",
      },
      {
        id: "Pseudo Code",
        label: "Pseudo Code",
        icon: <CodeXml size={16} />,
        directTo: "dashboard/pseudo-code",
      },
    ],
  },
  {
    id: "code-editor",
    label: "Code Editor",
    icon: <Code size={16} />,
    directTo: "dashboard/code-ide",
  },
  {
    id: "materials",
    label: "Materials",
    icon: <BookOpen size={16} />,
    directTo: "dashboard/materials",
  },
  {
    id: "Compete Mode",
    label: "Compete Mode",
    icon: <BookOpen size={16} />,
    directTo: "dashboard/compete-mode",
  },
  {
    id: "Suggestions",
    label: "Suggestions",
    icon: <BookOpen size={16} />,
    directTo: "dashboard/add-suggestions",
  },
];

const RenderItems = ({ option, openedOptions, handleClicked }) => {
  return (
    <div className="ml-2 pl-2 border-l-[1px] border-neutral-400">
      {option.children?.map((val) => (
        <div
          key={val.id}
          className="flex flex-col text-base space-y-2 text-primary-700 cursor-pointer"
        >
          <div
            id="parent"
            className="flex items-center space-x-2"
            onClick={() => handleClicked(val.id)}
          >
            {/* // up down arrow */}
            {val.children ? (
              openedOptions[val.id] ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )
            ) : null}
            {/* // folder name */}
            <span className="flex items-center gap-2">
              {!val.children && val.icon}
              {val.label}
            </span>
          </div>
          {/* // childrens */}
          {val.children && openedOptions[val.id] && (
            <RenderItems
              option={val}
              openedOptions={openedOptions}
              handleClicked={handleClicked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [openedOptions, setOpenedOptions] = useState({});

  useEffect(() => {
    const initialState = {};
    const collectIds = (items) => {
      items.forEach((item) => {
        initialState[item.id] = false;
        if (item.children) collectIds(item.children);
      });
    };
    collectIds(menuItems);
    setOpenedOptions(initialState);
  }, []);

  const handleClicked = (id) => {
    setOpenedOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="h-full w-64 border-2 border-primary-200 overflow-y-scroll ">
      <div className="ml-6 my-10 flex flex-col space-y-2   overflow-hidden  whitespace-nowrap">
        {menuItems.map((option) => (
          <div
            key={option.id}
            className="
           h-auto flex flex-col  text-lg text-primary-700 cursor-pointer"
          >
            <div
              id="parent"
              className="flex items-center space-x-2"
              onClick={() => handleClicked(option.id)}
            >
              {/* // up down arrow */}
              {option.children ? (
                openedOptions[option.id] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )
              ) : null}
              {/* // folder name */}
              <span className="flex items-center gap-2 ">
                {!option.children && option.icon}
                {option.label}
              </span>
            </div>
            {/* // childrens */}
            {option.children && openedOptions[option.id] && (
              <RenderItems
                option={option}
                openedOptions={openedOptions}
                handleClicked={handleClicked}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
