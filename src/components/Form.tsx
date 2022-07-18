import {useForm} from 'react-hook-form';

import emailjs from '@emailjs/browser';

import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Heading,
    Input,
    Text,
    Textarea, useColorModeValue,
    VStack
} from "@chakra-ui/react";

import {useState} from "react";

type FormData = {
    name: string;
    subject: string;
    email: string;
    message: string;
}

const schema = z.object({
    name: z.string().min(2, {message: "Must be 2 or more characters long"}),
    subject: z.string().min(7, {message: "Must be 7 or more characters long"}),
    email: z.string().email({message: "Invalid email address"}),
    message: z.string().min(50, {message: "Must be 50 or more characters long"}),
});

export function Form() {

    const buttonVariant = useColorModeValue('solid', 'outline')
    const borderColor = useColorModeValue('gray.500', 'gray.100')
    const textColor = useColorModeValue('gray.800', 'gray.100')

    const [sendError, setSendError] = useState(false)
    const [sendSuccess, setSendSuccess] = useState(false)

    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    function submitForm(formData: FormData) {
        emailjs
            .send("service_admjfle", "template_2117hs3", formData, "WAGy4eHIALN0a1QhN")
            .then(
                (result) => {
                    console.log(result.text);
                    setSendSuccess(true)
                },
                (error) => {
                    console.log(error.text);
                    setSendError(true)
                }
            );
        reset();
    }

    return (
        <Box>

            <Heading as='h2' mb='5'>Contact</Heading>
            <Text color={textColor} fontSize='2xl' mb={5}>Do you want to ask questions or send suggestions? Use the form
                below!</Text>
            <form onSubmit={handleSubmit(submitForm)}>
                <VStack align='left'>

                    <Input type='text' placeholder='Name' {...register('name')} size='lg'
                           borderColor={borderColor} _placeholder={{opacity: 1, color: 'gray.500'}}
                    />
                    {/*@ts-ignore*/}
                    {errors.name?.message && <Text color='red.500' fontSize='1xl'>{errors.name?.message}</Text>}

                    <Input type='text' placeholder='Subject' {...register('subject')} size='lg'
                           borderColor={borderColor} _placeholder={{opacity: 1, color: 'gray.500'}}
                    />
                    {/*@ts-ignore*/}
                    {errors.subject?.message && <Text color='red.500' fontSize='1xl'>{errors.subject?.message}</Text>}

                    <Input type='email' placeholder='Email' {...register('email')} size='lg'
                           borderColor={borderColor} _placeholder={{opacity: 1, color: 'gray.500'}}
                    />
                    {/*@ts-ignore*/}
                    {errors.email?.message && <Text color='red.500' fontSize='1xl'>{errors.email?.message}</Text>}

                    <Textarea placeholder='Message' {...register('message')} size='lg'
                              borderColor={borderColor} _placeholder={{opacity: 1, color: 'gray.500'}}
                    />
                    {errors.message?.message &&
                        <Text color='red.500' fontSize='1xl'>
                            {/*@ts-ignore*/}
                            {errors.message?.message}
                        </Text>}

                    <Button mt='5' colorScheme='blue' isLoading={isSubmitting} type="submit" >
                        Submit
                    </Button>
                </VStack>
            </form>

            {sendSuccess && (
                <Alert status='success' my='5' borderRadius='5'>
                    <AlertIcon/>
                    Message sent successfully!
                </Alert>
            )}

            {sendError && (
                <Alert status='error' my='5' borderRadius='5'>
                    <AlertIcon/>
                    There was a problem, please try again later...
                </Alert>
            )}
        </Box>
    )
}