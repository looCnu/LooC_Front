import React, {useState} from "react";
import  {Button, ScrollView, Text, View, Image, TextInput} from 'react-native';


const getFullName = (firstName, secondName, thirdName) => {
  return firstName +' '+ secondName +' '+ thirdName;
}

const Propstest = (prop) => {
  return (
    <View>
      <Text> I am {prop.name}! </Text>
    </View>
  );
}

const LooC = () => {

  const [isHungey, setIsHungey] = useState(true);
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Text>some text</Text>
      <View>
        <Text>
          some more text!
        </Text>
        <Image
          source = {{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200}}
        />
      </View>
      <TextInput
        style = {{
          height:80,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue= "You can type is me!"
        />
        <Text>
          Hello, I am {getFullName("Seo", "Hong", "Seok")}!
        </Text>
        <Propstest name="kei"/>
        <Text>
           i am {isHungey ? "hungry" : "full"}!
        </Text>
        <Button
          onPress={() => {
              setIsHungey(!isHungey);
          }}
          //disabled={!isHungey}
          title = {isHungey ? "Pour me some milk, please!": "thank you!~"} 
        />

        <View style = {{padding: 40}}>
          <TextInput
            style = {{height : 40}}
            placeholder = "Type here to translate!"
            onChange={newText => setText(newText)}
            defaultValue = {text}
          />
        </View>

    </ScrollView>

  );

}

export default LooC;