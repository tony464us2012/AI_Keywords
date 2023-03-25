import React from 'react'
import { useState } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import TestInput from './components/TestInput'
import KeywordsModal from './components/KeywordsModal'


const App = () => {

  const [keywords, setKeywords] = useState([''])
  const [isOpened, setIsOpened] = useState(false)
  const [loading, setLoading] = useState(false)

  const extractKeywords =  async (text) => {
    setLoading(true)
    console.log(import.meta.env.VITE_OPENAI_URL)
    console.log(import.meta.env.VITE_OPENAI_API_KEY)

    // const response = await fetch(import.meta.env.VITE_OPENAI_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${import.meta.env.REACT_APP_OPENAI_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     model: 'text-davince-003',
    //     prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commnas/n/n' + text + '',
    //     temperature: 0.5,
    //     max_tokens: 60,
    //     frequency_penalty: 0.8,
    //    }),
    // })

    // const json = await response.json()
    // console.log(json)
    // const data = json.choices[0].text.trim()

    setKeywords(data)
    setIsOpened(true)
    setLoading(false)
  }

  const closeModal = () => {
    setIsOpened(false)
  }
  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent       >
        <Header />
        <TestInput extractKeywords={extractKeywords}/>
        <Footer />
      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpened} closeModal={closeModal} />
    </Box>
  )
}

export default App