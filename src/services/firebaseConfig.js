import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { project_info, client } from "../../google-services.json"

const firebaseConfig = {
  apiKey: client[0].api_key[0].current_key,
  authDomain: `${project_info.project_id}.firebaseapp.com`,
  projectId: project_info.project_id,
  storageBucket: project_info.storage_bucket,
  messagingSenderId: project_info.project_number,
  appId: client[0].client_info.mobilesdk_app_id
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };