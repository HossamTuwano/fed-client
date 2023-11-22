import { View, Text, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  return (
    <View className="flex-row" >
      <TextInput placeholder="food"/>
      <TextInput placeholder="price"/>
    </View>
  );
}
