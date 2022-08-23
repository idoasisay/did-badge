import React from 'react';
import '../assets/css/footer.css';

export default function Header() {
  return (
    <footer>
      <div className='container'>
        <img src='signature_horizontal_color.png' alt='코드스테이츠 로고' />
        <div className='flex_container'>
          <div className='footer_1'>
            <p>Unlock Human Potential</p>
            <span>Copyright © 2022 Code States, ltd. All rights reserved</span>
          </div>
          <div className='footer_2'>
            <ul>
              <li>
                <a
                  href='https://www.codestates.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  홈페이지
                </a>
              </li>
              <li>
                <a
                  href='https://www.codestates.com/terms/policy'
                  target='_blank'
                  rel='noreferrer'
                >
                  개인정보 취급방침
                </a>
              </li>
            </ul>
          </div>
          <div className='footer_3'>
            주식회사 코드스테이츠 | 대표자 : 김인기 | 사업자 번호 : 703-88-00878
            <br />
            <span className='address'>
              서울특별시 서초구 서초대로 396, 강남빌딩 20층 (스파크플러스 강남
              2호점)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
