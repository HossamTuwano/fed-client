import { View, Text, TextInput, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect } from "react";

export default function Form() {
  const [isLoading, setIsLoadin] = React.useState(false);
  const [fed, setFed] = React.useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(
    fetch("http://localhost:5257/feds").then((data) = )
    , [])

  async function addFed(data: object) {
    const response = await fetch("", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setFed(await response.json());
  }

  console.log(fed);
  return (
    <View className='flex-row justify-center mt-6'>
      <View className='flex-row p-4 justify-between w-96'>
        <TextInput
          placeholder='food'
          className='border border-[#F17751] border-dotted flex-1 p-2 mr-1'
        />
        <TextInput
          placeholder='price'
          className='border border-[#F17751] border-dotted p-2 mr-1 '
        />
        <Pressable
          className='border border-[#681D05] bg-[#C7441A] border-dotted p-2 flex items-center w-20 justify-center '
          onPress={handleSubmit(addFed)}
        >
          <Text className='capitalize text-white text-sm trailing-lg'>add</Text>
        </Pressable>
      </View>
    </View>
  );
}
