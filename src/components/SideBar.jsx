import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "../assets/styles/sideBar.module.css";

export default function SideBar() {
  const location = useLocation();
  const isLogged = JSON.parse(localStorage.getItem("isLogged"));
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  function logout() {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/";
  }

  return (
    <nav>
      <div className={styles.box}>
        <img className={styles.logo} src="/img/logo.svg" alt="logo" />
        <ul>
          {!isLogged ? (
            <Link to="/">
              <li className={location.pathname === "/" ? styles.active : ""}>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2796 3.71579C12.097 3.66261 11.903 3.66261 11.7203 3.71579C11.6678 3.7311 11.5754 3.7694 11.3789 3.91817C11.1723 4.07463 10.9193 4.29855 10.5251 4.64896L5.28544 9.3064C4.64309 9.87739 4.46099 10.0496 4.33439 10.24C4.21261 10.4232 4.12189 10.6252 4.06588 10.8379C4.00765 11.0591 3.99995 11.3095 3.99995 12.169V16C3.99995 16.9456 4.0005 17.6047 4.03569 18.1205C4.07028 18.6275 4.13496 18.9227 4.22832 19.148C4.5328 19.8831 5.11682 20.4672 5.8519 20.7716C6.07729 20.865 6.37249 20.9297 6.8794 20.9643C7.3953 20.9995 8.05439 21 8.99995 21H15C15.9455 21 16.6046 20.9995 17.1205 20.9643C17.6274 20.9297 17.9226 20.865 18.148 20.7716C18.8831 20.4672 19.4671 19.8831 19.7716 19.148C19.8649 18.9227 19.9296 18.6275 19.9642 18.1205C19.9994 17.6047 20 16.9456 20 16V12.169C20 11.3095 19.9923 11.0591 19.934 10.8379C19.878 10.6252 19.7873 10.4232 19.6655 10.24C19.5389 10.0496 19.3568 9.87739 18.7145 9.3064L13.4748 4.64896C13.0806 4.29855 12.8276 4.07463 12.621 3.91817C12.4245 3.7694 12.3321 3.7311 12.2796 3.71579ZM11.1611 1.79556C11.709 1.63602 12.2909 1.63602 12.8388 1.79556C13.2189 1.90627 13.5341 2.10095 13.8282 2.32363C14.1052 2.53335 14.4172 2.81064 14.7764 3.12995L20.0432 7.81159C20.0716 7.83679 20.0995 7.86165 20.1272 7.88619C20.6489 8.34941 21.0429 8.69935 21.3311 9.13277C21.5746 9.49916 21.7561 9.90321 21.8681 10.3287C22.0006 10.832 22.0004 11.359 22 12.0566C22 12.0936 22 12.131 22 12.169V16.0355C22 16.9373 22 17.6647 21.9596 18.2567C21.918 18.8654 21.8305 19.4037 21.6194 19.9134C21.1119 21.1386 20.1385 22.1119 18.9134 22.6194C18.4037 22.8305 17.8654 22.9181 17.2566 22.9596C16.6646 23 15.9372 23 15.0355 23H8.96443C8.06267 23 7.33527 23 6.74326 22.9596C6.13452 22.9181 5.59624 22.8305 5.08654 22.6194C3.8614 22.1119 2.88803 21.1385 2.38056 19.9134C2.16943 19.4037 2.08187 18.8654 2.04033 18.2567C1.99994 17.6647 1.99995 16.9373 1.99995 16.0355L1.99995 12.169C1.99995 12.131 1.99993 12.0936 1.99992 12.0566C1.99955 11.359 1.99928 10.832 2.1318 10.3287C2.24383 9.90321 2.42528 9.49916 2.66884 9.13277C2.95696 8.69935 3.35105 8.34941 3.87272 7.8862C3.90036 7.86165 3.92835 7.83679 3.95671 7.81159L9.22354 3.12996C9.58274 2.81064 9.89467 2.53335 10.1717 2.32363C10.4658 2.10095 10.781 1.90627 11.1611 1.79556Z"
                    fill="#0F1729"
                  />
                </svg>
              </li>
            </Link>
          ) : null}
          {isAdmin && isLogged ? (
            <>
              <Link to="/pedidos">
                <li
                  className={
                    location.pathname === "/pedidos" ? styles.active : ""
                  }
                >
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 1024 1024"
                    fill="#000000"
                    class="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                      fill=""
                    />
                    <path
                      d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                      fill=""
                    />
                    <path
                      d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                      fill=""
                    />
                  </svg>
                </li>
              </Link>
              <Link to="/inventario">
                <li
                  className={
                    location.pathname === "/inventario" ? styles.active : ""
                  }
                >
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00049 6.2475V7.99573H4.24829C3.00565 7.99573 1.99829 9.00309 1.99829 10.2457V21.7457C1.99829 22.9884 3.00565 23.9957 4.24829 23.9957H23.7518C24.9944 23.9957 26.0018 22.9884 26.0018 21.7457V10.2457C26.0018 9.00309 24.9944 7.99573 23.7518 7.99573H20.0018V6.2475C20.0018 5.00486 18.9945 3.9975 17.7518 3.9975H10.2505C9.00785 3.9975 8.00049 5.00486 8.00049 6.2475ZM10.2505 5.4975H17.7518C18.1661 5.4975 18.5018 5.83328 18.5018 6.2475V7.99573H9.50049V6.2475C9.50049 5.83328 9.83627 5.4975 10.2505 5.4975ZM4.24829 9.49573H23.7518C24.166 9.49573 24.5018 9.83152 24.5018 10.2457V14H20.5044V12.75C20.5044 12.3358 20.1686 12 19.7544 12C19.3402 12 19.0044 12.3358 19.0044 12.75V14H9.00439V12.75C9.00439 12.3358 8.66861 12 8.25439 12C7.84018 12 7.50439 12.3358 7.50439 12.75V14H3.49829V10.2457C3.49829 9.83151 3.83408 9.49573 4.24829 9.49573ZM19.0044 15.5V16.75C19.0044 17.1642 19.3402 17.5 19.7544 17.5C20.1686 17.5 20.5044 17.1642 20.5044 16.75V15.5H24.5018V21.7457C24.5018 22.1599 24.166 22.4957 23.7518 22.4957H4.24829C3.83408 22.4957 3.49829 22.1599 3.49829 21.7457V15.5H7.50439V16.75C7.50439 17.1642 7.84018 17.5 8.25439 17.5C8.66861 17.5 9.00439 17.1642 9.00439 16.75V15.5H19.0044Z"
                      fill="#212121"
                    />
                  </svg>
                </li>
              </Link>
            </>
          ) : null}
          {!isAdmin && isLogged ? (
            <Link to="/hacerPedido">
              <li
                className={
                  location.pathname === "/hacerPedido" ? styles.active : ""
                }
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 1024 1024"
                  fill="#000000"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                    fill=""
                  />
                  <path
                    d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                    fill=""
                  />
                  <path
                    d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                    fill=""
                  />
                </svg>
              </li>
            </Link>
          ) : null}
        </ul>
      </div>
      {isLogged ? (
        <div className={styles.box2}>
          <ul>
            <button onClick={() => logout()}>
              <li>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                    fill="#000000"
                  />
                </svg>
              </li>
            </button>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
