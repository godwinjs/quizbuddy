"use client"
import React from "react"
import javascriptQues from "../javascript"


export default function Quiz() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]

    const javascriptQuestions = javascriptQues().map((item, id) => {           
        return <div key={"ind"+id}>
                    <div className="relative flex place-items-center">
                        {item.quest}
                    </div>

                    { item.opt.map((answers, idx) => {
                        return <div key={"ind"+id+idx} className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                                    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                        <h2 className="mb-3 text-2xl font-semibold">
                                            {letters[idx]}
                                        </h2>
                                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                                            {answers}
                                        </p>
                                    </div>
                                </div>
                    })}

                </div>
    });

    return <>
            {javascriptQuestions}
        </>
}