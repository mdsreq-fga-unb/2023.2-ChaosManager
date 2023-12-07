'use client'
import GetDB from '../Components/Tests/GET/GetDB';
import PostDB from '../Components/Tests/POST/PostDB';
import PutDB from '../Components/Tests/PUT/PutDB';
import styles from './dev.module.css';

export default function GetAndPostDBPage() {
  return (
    <div className={styles.container}>
      <GetDB />
      <PostDB />
      <PutDB />
    </div>
  );
}