
const checkbox = ({ currentState }) => {
    if( currentState ) {
      return (
        <View style={{ justifyContent: "center", textAlign : "center"} }>
          
        </View>
      )}
    else {
      return (
        <View >
          <MaterialCommunityIcons name="checkbox-blank-outline-marked" color={"black"} size={20} />
        </View>
      )
    }
  }