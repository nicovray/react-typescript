import blank_profile from "../assets/blank_profile.png";
import ISkill from "../interfaces/ISkill";
import IWilderProps from "../interfaces/IWilderProps";
import Skill from "./Skill";

const Wilder = ({ wilderInfos, onDeleteButtonClicked }: IWilderProps) => (
  <article className="card">
    <img src={blank_profile} alt="Jane Doe Profile" />
    <h3>{wilderInfos.name}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <h4>Wild Skills</h4>
    <ul className="skills">
      {wilderInfos.skills?.map((skill: ISkill) => (
        <Skill
          key={skill.id}
          id={skill.id}
          name={skill.name}
          rating={skill.rating}
        />
      ))}
    </ul>
    <button onClick={onDeleteButtonClicked}>Supprimer</button>
  </article>
);

export default Wilder;
