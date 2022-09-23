import { View,StyleSheet,Text,Image} from "react-native"


 const FoodRecom = () => { 
    return(
        <View>
            <View style={styles.options}>
            <Image source ={require('../assets/options.png')}/>
            </View>
            
            <Text  style={{fontSize:30,textAlign:'center',fontWeight:'600',marginTop:40}}>Food Recommender </Text>
            <View style={styles.recm}>
                <Text style={{width:350,fontSize:19,textAlign:'center',fontWeight:'500'}}>Hello Surya, Here are the food that are recommended for you based on your latest health records. You can follow this food habit to keep yur stay healthy</Text>
            </View>
            <View>
            <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <View style={styles.card}>
                    <View style={styles.img1}>
                        <Image source={require("../assets/carbohydrates.png")}/>
                    </View>
                    <Text style={{fontSize:18,textAlign:'center',fontWeight:'600',marginTop:20}}>Eat food rich in Carbohydrates</Text>
                </View>
                <View style={styles.card2}>
                    <View style={styles.img1}>
                        <Image source={require("../assets/sodiumFood.png")}/>
                    </View>
                    <Text style={{fontSize:18,textAlign:'center',fontWeight:'600',marginTop:20}}>Eat food rich in Carbohydrates</Text>
                </View>
                </View>
            </View>
            </View>
        <View>
            <View style={{alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.card}>
                    <View style={styles.img1}>
                        <Image source={require("../assets/chocolate-bar.png")}/>
                    </View>
                    <Text style={{fontSize:18,textAlign:'center',fontWeight:'600',marginTop:20}}>Eat food rich in Carbohydrates</Text>
                </View>
                <View style={styles.card2}>
                    <View style={styles.img1}>
                        <Image source={require("../assets/raw.png")}/>
                    </View>
                    <Text style={{fontSize:18,textAlign:'center',fontWeight:'600',marginTop:20}}>Eat food rich in Carbohydrates</Text>
                </View>
                </View>
            </View>
        </View>
        </View>
    )

  }
  const styles = StyleSheet.create({
    options:{
        marginTop:40,
        marginLeft:15
      },
      recm:{
        alignItems:'center',
        marginTop:20
      },
      card:{
        backgroundColor:'#D9D9D9',
        width:180,
        height:220,
        borderRadius:20,
        marginTop:20
      },
      img1:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    card2:{
        backgroundColor:'#D9D9D9',
        width:180,
        height:220,
        borderRadius:20,
        marginTop:20,
        marginLeft:20
    }

  })

  export default FoodRecom;