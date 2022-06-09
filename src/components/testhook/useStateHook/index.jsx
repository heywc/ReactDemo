/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-05-30 10:15:34
 * @LastEditors: ywc 1842347744@qq.com
 * @LastEditTime: 2022-05-30 11:21:47
 * @FilePath: /myself/mygithub/ReactDemo/src/components/testHook/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./index.css"
import React, { useState } from 'react';

export function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me 1
      </button>
    </div>
  );
}

export function Example2() {
    // 声明一个叫 "count" 的 state 变量
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count - 1)}>
          Click me
        </button>
      </div>
    );
  } 