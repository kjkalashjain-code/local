import React, { useState, useEffect } from "react";

const AddUser = async (email, pass) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/userslogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};


export default AddUser;

