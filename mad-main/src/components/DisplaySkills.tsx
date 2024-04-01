import { useState, useEffect } from "preact/hooks"
import skills from "../data/skills.json"
import SkillCard from "./SkillCard"
import style from "./animation.module.css"
import type { Skill } from "types/skills"

const DisplaySkills = () => {
    const [items, setItems] = useState(skills as Skill[])

    useEffect(() => {
        setItems(skills)
    }, [])

    return (
        <div class={`flex flex-col relative gap-10  `}>
            <div
                class={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-x-4 gap-4 md:gap-x-8 md:gap-y-6 transition-all ${style.translate_x_right}`}
            >
                {items.map((skill: Skill) => (
                    <SkillCard
                        name={skill.name}
                        icon={skill.icon}
                        description={skill.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default DisplaySkills
