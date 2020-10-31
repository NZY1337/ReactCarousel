import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCRMxuM8y2TbMEEtnL0gwP2-MlhM-xpnNo",
	authDomain: "designer-s-compass.firebaseapp.com",
	databaseURL: "https://designer-s-compass.firebaseio.com",
	projectId: "designer-s-compass",
	storageBucket: "designer-s-compass.appspot.com",
	messagingSenderId: "283775869606",
	appId: "1:283775869606:web:a17ea2db57a481189d4a67",
	measurementId: "G-XF23GLPJSV",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("/blog");
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
