import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      // input: type any word that begins with a vowel
      // output: words that begin with a vowel translates to pig latin
      // create a conditional statement eachWord.charAt(0) takes the first letter of the word. 
      // if the condition of vowelsArray.includes(in the case of apple, vowelsArray = ['a', 'e']) . includes() will check if eachWord.charAt(0) is one of the matching vowels
      // then return the original word with "way" at the end
      if (vowelsArray.includes(eachWord.charAt(0))) {
          return eachWord + "way"
          // input: any word that has a "qu" in the first syllabul
          // output: word with "qu" in the first syllabul will translate to pig latin
          // continue the conditional statement that checks eachWord using .includes() checking to see if "qu" is in the word
          // using .indexOf("qu") to determine the location of "qu"
          // + 2 will allow us to find the index located behind "qu" (such as queen, it would find the first "e" which is index[2]) 
          // so using the eachWord.slice(2) (2 coming from eachwWrd.Indexof()) will return the part of the word starting from the aquired index
          // we add that part of the word
          // using .indexOf("qu") to determine the location of "qu" 
          // + 2 will allow us to find the index located behind "qu" (such as queen, it would find the first "e" which is index[2])
          // the zero represents the first index of the eachWord, the result from eachWord.Indexof()+2 will represent the index where slice will stop.
          // now that we have the locations for slice, (0, 2), slice will start at the zero index and end at the 2 index
          // finally add the "ay"
        } else if (eachWord.includes("qu")) {
          return eachWord.slice(eachWord.indexOf("qu")+2) + (eachWord.slice(0, eachWord.indexOf("qu")+ 2)) + "ay"
          // input: any word that has no vowels other than y
          // output: words with only y vowels will translate to pig latin
          // continue the conditional statement that confirms there are no vowels by checking the vowelsArray.length will only be greater than zero if there is a vowel
          // and .include() checks eachWord to see if it includes "y"
          // // using .indexOf("y") to determine the location of "y"
          // so using the eachWord.slice(eachWord.indexOf("y")) will return the part of the word starting from the aquired index
          // we add that part of the word
          // using .indexOf("y") to determine the location of "y" 
          // the zero represents the first index of the eachWord, the indexOf("y") determines where .slice stops
          // now that we have the locations for slice, (0, y's index), slice will start at the zero index and end at the y's index
          // finally add the "ay"
        } else if (vowelsArray.length === 0 && eachWord.includes("y")) {
          return eachWord.slice(eachWord.indexOf("y")) + (eachWord.slice(0, eachWord.indexOf("y"))) + "ay"
        }
        
      console.log(eachWord.slice(eachWord.indexOf("qu")+2))

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
