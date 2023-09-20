// import React, { useRef, useState } from 'react';
// import {
//     Button,
//     DrawerLayoutAndroid,
//     Text,
//     StyleSheet,
//     View,

// } from 'react-native';
// import { Avatar } from 'react-native-elements';

// const App = () => {
//     const drawer = useRef(null);

//     const navigationView = () => (
//         <View style={[styles.container, styles.navigationContainer]}>
//             {/* <TouchableOpacity>
//             <Text style={styles.text}>
//                 Chennai
//             </Text>
//            </TouchableOpacity> */}
//             <Avatar
//                 rounded
//                 source={require('../assets/img2.gif')}
//                 size='medium'
//             />
//             <Text>
//                 Chennai
//             </Text>
//         </View>
//     );

//     return (
//         <DrawerLayoutAndroid
//             ref={drawer}
//             drawerWidth={300}
//             renderNavigationView={navigationView}>
//             <View style={styles.container1}>
//                 <Text style={styles.paragraph}>
//                     press
//                 </Text>
//                 <Button
//                     title="Open drawer"
//                     onPress={() => drawer.current.openDrawer()}
//                 />
//             </View>
//         </DrawerLayoutAndroid>
//     );
// };

// const styles = StyleSheet.create({
//     container1: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 16,
//     },
//     container: {
//         height: '100%',
//         paddingHorizontal:'5%',
//         paddingVertical:'2%',
//         flexDirection:'row'
//     },
//     navigationContainer: {
//         backgroundColor: '#ecf0f1',
//     },
//     paragraph: {
//         padding: 16,
//         fontSize: 15,
//         textAlign: 'center',
//     },
// });

// export default App;