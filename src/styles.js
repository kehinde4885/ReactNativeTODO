import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6D7EF',
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#9395D3',
    flexDirection: 'row',
    //This place contains MAgo Mago
    //  marginRight: 65,

    //width: Dimensions.get('screen').width,
    paddingTop: 45,
    paddingBottom: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Jost-600-Semi',
  },
  text: {
    fontFamily: 'Jost-400-Book',
  },
  body: {
    marginTop: 24,
    marginHorizontal: 8,
    gap: 20,
  },
  todo: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingRight: 24,
    paddingLeft: 20,
    justifyContent: 'space-between',
    paddingVertical: 22,
    alignItems: 'center',
    borderRadius: 15,
    elevation: 12,
  },
  todoImgs: {
    width: 25,
    height: 25,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    gap: 20,
  },
  fab: {
    height: 70,
    width: 70,
    backgroundColor: '#9395d3',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 16,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 10,
  },

  TabMenu: {
    paddingVertical: 10,
  },
  TabMenuText: {
    fontSize: 10,
    fontFamily: 'Jost-400-Book'
  },
  textInput: {
    fontFamily: 'Jost-400-Book',
    borderColor: '#8b8787',
    borderBottomWidth: 1,
  },
  form: {
    marginTop: 24,
    marginHorizontal: 28,
    gap: 40,
  },
  btn: {
    backgroundColor: '#9395d3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 15,
    elevation: 9,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Jost-600-Semi',
  },
  btn2: {
    paddingVertical: 24,
    flex: 1,
  },
  btnText2: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Jost-400-Book',
  },
});

export {styles};
