import React, { useState } from "react"
import {View,Text,StyleSheet,TextInput,Image } from "react-native"
import { Colors, Fonts } from "../../styles"
import { ImagesPath } from "../../constants"

const styles = StyleSheet.create({
    searchWrapper: {
      flex: 1,
      height: 50,
      backgroundColor: Colors.light.gray,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    imageFullWidth: {
      width: null,
      height: null,
      flex: 1,
      resizeMode: 'contain',
    },
    imgWrapperIco: {
      height: 25,
      width: 25,
      // backgroundColor:'red',
      borderRadius: 8,
      overflow: "hidden",
      marginLeft: 10
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      // fontFamily: Fonts.ProductSans.regular,
      fontSize: 18
    }
})

/**
 * {{props}} => {onStopTyping}
 * onStopTyping => called a function on stop typing and pass the callback 
 */
const SearchBar = props => {
  const { onStopTyping } = props
  const [textValue , changeText] = useState("")

  return (
    <View style={styles.searchWrapper}>
      <View style={styles.imgWrapperIco}>
        <Image
          source={ImagesPath.icon.action.search}
          style={styles.imageFullWidth}
        />
      </View>
      <TextInput
        onChangeText={text => changeText(text)}
        onSubmitEditing={_ => onStopTyping(textValue)}
        style={styles.input}
        placeholder="Type text here..."
      />
    </View>
  )
}

export default SearchBar