import React from 'react'
import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TestInput = ({ extractKeywords }) => {

    const [text, setText] = useState('')

    const toast = useToast()

    const submitText = () => {
        if (text.length === 0) {
            toast({
                title: 'No text',
                description: 'Please enter some text',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            return
        } else {
            extractKeywords(text)
        }
    }

  return (
    <>
        <Textarea
        bg='blue.400'
        coloq='white'
        padding={5}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)} />
        <Button
        bg='blue.500'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'blue.700' }}
        onClick={submitText}
        >
            Extract Keywords
        </Button>
    </>
  )
}

export default TestInput