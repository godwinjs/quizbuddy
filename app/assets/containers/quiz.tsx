"use client"
import React from "react"
import javascriptQues from "../javascript"


export default function Quiz() {
    // persist answered and index
    const [ index, setIndex ] = React.useState(0);

    let unAnswered = javascriptQues();
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
    let answered: any = []

    React.useEffect(() => {
      // class Stack {

      //   constructor () {
      //     this.maxSize = 100;
      //     this.stack = [];
      //     this.top = -1
      //   }
      
      //   isFull () {
      //     return this.top === this.maxSize
      //   }
      //   isEmpty() {
      //     return this.top === -1
      //   }
      
      //   push(value) {
      //     if(this.isFull()){
      //       return false;
      //     }
      
      //     this.top++;
      //     this.stack[this.top] = value;
      //     return true;
      //   }
      
      //   pop() {
      //     if ( this.isEmpty() ) {
      //       return null
      //     }
      
      //     this.top--;
      //     return this.stack.pop();
      //   }
      
      //   peek() {
      //     if( this.isEmpty() ){
      //       return null
      //     }else {
      //       return this.stack[this.top]
      //     }
      //   }
      // }
      // const stack = new Stack();

      const stack = { peek: () => 4, push: (item: any) => item} // fake new class
      
      function reverseStringStack(str = ''): string{
        if(str.length === 0){
          return ''
        } 
        
        stack.push(str.at(str.length - 1))
      
        return stack.peek() + reverseStringStack(str.slice(0, str.length - 1))
      }
      
      console.log(reverseStringStack('hello world'))

        /////////////////////////!mine
        function reverseString(str = ''): string {
          if(str.length === 0){
            return ''
          } 
        
          return str.at(str.length -1) + reverseString(str.slice(0, str.length - 1))
        }/////////////////////
        //
        function maxSubArrSum(arr: number[], k: number) {
            let sum = -Infinity;
      
            for (let i = 0; i < arr.length; i++) {
              let sum4 = 0;
      
              for (let j = 0; j < k; j++ ) {
                console.log(arr[i+j])
                
                if( Number.isNaN(arr[i+j])){
                  sum = sum4;
                  break;
                }
                sum4 += arr[i+j]
      
                if(sum4 > sum ){
                  sum = sum4
                }
      
              }
            }
      
            return sum;
          }
      
          function maxSubarrSum(arr: number[], k: number) {
            let maxSum = -Infinity;
      
            for (let i = 0; i < arr.length - k; i++) {
              let currentSum = 0;
      
              for (let j = i; j < i + k; j++) {
                currentSum += arr[j]
              }
      
              maxSum = Math.max(maxSum, currentSum) //0,12 return 12; 12, 43 return 43
            }
      
            return maxSum
          }
          
          console.time("maxSubarrSum")
          console.log([2, 3,7,11, 4, 5, 10, 23, 1, 2, 23], maxSubarrSum([2, 3,-7,11, 4, 5, 10, -23, 1, -2, 23], 4) )
          console.timeEnd("maxSubarrSum") //maxSubarrSum: 1.182861328125 ms
      
          console.time("Mine maxSubArrSum")
          console.log([2, 5, 3, 1, 11, 7, 6, 4], maxSubArrSum([-2, 5, -3, 1, 11, 7, -6, 4], 3))
          console.timeEnd("Mine maxSubArrSum") //Mine maxSubArrSum: 11.18798828125 ms

          function add(arr: number[]) {
            let sum = 0, sum2 = 0;
            for ( let i = 0; i < arr.length; i++ ) {
              sum += arr[i]
              for (let j = 0; j < arr.length; j++ ) {
                sum2 += arr[j]
              }
            }
      
            console.log( sum, "+", sum2, "=" ,sum +sum2)
            return sum + sum2
          }
          // console.log(add([1,2,3,4,5]))
      
          function matrix(num: any): number[] {
            let matrix: any = [];
            for ( let i = 0; i < num; i++ ) {
              matrix[i] = []
              for (let j = 0; j < num; j++ ) {
                matrix[i][j] = i + j
              }
            }
      
            return matrix
          }
      
          // console.log(matrix(2))

        // 
        function addUpTo(n: number): number {
         return n * ( n + 1 ) /2 // runs fine
         // return n + addUpTo(n - 1) // maximum call stack size exeeded in next env
        }
        function accessElem(arr: any, idx: number): any {
         return arr[idx]
        }
        const arr2 = Array.from({ length: 1000 }, (_, idx) => idx + 1)
   
        console.time('Access Element 1')
        console.log( accessElem(['hello', 1, 3, () => 'hello MF', 5], 4) )
        console.timeEnd('Access Element 1')
   
        console.time('Access Element 2')
        console.log( accessElem(arr2, 120) )
        console.timeEnd('Access Element 2')
     }, [])


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