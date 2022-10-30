import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function LoginCheck(){
    const [cookies,setCookie, removeCookie]= useCookie(['id']);
    const [userId, setUserId] = userState(null);

    const navigate = useNavigate();

    const authCheck =()=>{
        const token = cookies.id;
        axios
			.post('/users/loginCheck', { token: token }) // 토큰으로 서버에 인증 요청
			.then((res) => {
				setUserId(res.data.id); // 유저 아이디 표시를 위해 작성
			})
			.catch(() => {
				logOut(); // 에러 발생시 실행
			});
    };

    useEffect(() => {
		authCheck(); // 로그인 체크 함수
	});

	const logOut = () => {
		removeCookie('id'); // 쿠키를 삭제
		navigate('/main'); // 메인 페이지로 이동
	};
}

