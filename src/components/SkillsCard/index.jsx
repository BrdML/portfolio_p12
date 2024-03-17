"use client"

import React from "react";
import Image from "next/image";

const SkillsCard = ({image, title, alt}) => {
    return (
            <div className="Skillscard bg-white w-[120px] h-[120px] flex flex-col justify-center items-center shadow-md rounded">
                <div className="image-container">
                    <Image width={48} height={48} src={image} alt={alt}/>
                </div>
                <div className="title-container">
                    <p className="font-bold">{title}</p>
                </div>
            </div>
    )
};

export default SkillsCard