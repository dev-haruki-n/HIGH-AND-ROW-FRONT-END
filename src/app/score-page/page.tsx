"use client";   
import { useEffect, useState } from "react";

// レスポンスボディの型を定義してレスポンスに合わせる

export default function scorePage() {
    const [state, setState] = useState(null);
    useEffect(function () {
        async function fetchRecord() {
            const response = await fetch('http://127.0.0.1:8000/user')
            const body = await response.json()
            setState(body)
        }
        fetchRecord();
    },[])
    return (
        <>{JSON.stringify(state)}</>
    );
}