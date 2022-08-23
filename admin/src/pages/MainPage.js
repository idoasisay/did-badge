import React from 'react';
export default function MainPage() {
  return <div>메인 페이지</div>;
}

// 개발 중이라 잠시 turn off
// useEffect(() => {
//   if (!isValidUser(user) || !isLoginUser(user)) {
//     navigate('/login');
//   }
// }, [user, navigate]);

// 조건부 렌더링도 개발 중이라 잠시 turn off
// <>{user.name && '메인 페이지입니다'}</>;

/**
 *
 * 오늘 해야 할 일
 * 메인 페이지 클라이언트 -> DID 받은 거, 뱃지 확인!
 * 어드민 페이지 클라이언트
 */
