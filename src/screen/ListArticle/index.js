import React, { Component } from "react"
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native"
import styles from "./styles"
import {SearchBar} from "../../components"

class ListArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: [
        {
          id: 1,
          title: "Meeting",
          isActive: true
        },
        {
          id: 2,
          title: "Diklat",
          isActive: false
        },
        {
          id: 3,
          title: "Kegiatan",
          isActive: false
        },
        {
          id: 4,
          title: "Client",
          isActive: false
        },
        {
          id: 5,
          title: "Lainya",
          isActive: false
        },
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    const {menuList} = this.state

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{padding: 20}}>
            <View style={{paddingBottom: 20}}>
              <SearchBar onStopTyping={e => console.log(e)}/>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {menuList.map(res => (
                <TouchableOpacity activeOpacity={0.8} key={res.id} style={styles.menuListWrapper}>
                  <Text style={styles.titleList}>{res.title}</Text>
                  {res.isActive && (
                    <View style={styles.borderBottom}></View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View>
              <Text style={styles.title}>Today</Text>
              <View style={styles.wrapperCard}>
                <Text style={styles.cardTitle}>Incoming Meeting</Text>
                <Text style={styles.cardDescriptio}>Lorem ipsum dolor is amet, consqueror, bottle full of liquuor</Text>
                <View style={styles.wrapperTime}>
                  <Text style={styles.time}>10.20 AM</Text>
                </View>
                <Text style={styles.member}>4 member going</Text>
                <View style={styles.wrapperBottom}>                  
                  <View style={{flex:1}}/>
                  <TouchableOpacity 
                    onPress={_=> console.log("MANTAB")}
                    activeOpacity={0.8} 
                    style={[styles.wrapperTime,{width:120,height:50}]}>
                    <Text style={styles.time}>Read More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default ListArticle
