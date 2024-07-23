"use client"
import React from "react"
import javascriptQues from "../javascript"


export default function Quiz() {
    // persist answered and index
    const [ index, setIndex ] = React.useState(0);

    let unAnswered = javascriptQues();
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
    let answered: any = []


    const questions = unAnswered.map((item, id) => {           
        return <div key={"ind"+id} className="max-w-full mt-12 break-words">
                    <div className="relative place-items-center mb-12">
                        <p>{item.quest}</p>
                    </div>

                    <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2">
                        { item.opt.map((answers, idx) => {
                            return <div key={idx} className="group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                            <h2 className="mb-3 text-2xl sm:text-xl font-semibold">
                                                {letters[idx]}
                                            </h2>
                                            <p className="m-0 max-w-full text-sm opacity-50 ">
                                                {answers}
                                            </p>
                                        </div>
                        }) }
                    </div>

                </div>
    });

    const handleAnswer = (id: number) => {
        answered.push(unAnswered[id])
        unAnswered = unAnswered.splice(id)
        setIndex(index+1)
    }

    React.useEffect( () => {
        console.log('questions', unAnswered)
        console.log('answered', answered)
    }, [index, unAnswered] )
        

    return <>
            {questions[index]}
        </>
}