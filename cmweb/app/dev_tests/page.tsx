'use client'
import Combat from '../Components/Combate/Combat';
import GetDB from '../Components/Tests/GET/GetDB';
import PostDB from '../Components/Tests/POST/PostDB';
import PutDB from '../Components/Tests/PUT/PutDB';
import styles from './dev.module.css';
import {io} from 'socket.io-client';
const socket = io("http://164.41.98.22:8080");


export default function GetAndPostDBPage() {
  return (
    <>
      <div className={styles.container}>
        <GetDB socket={socket} />
        <PostDB socket={socket} />
        <PutDB socket={socket} />        
      </div>     
    </>
  );
}