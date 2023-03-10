import React from "react";
import BoardWriteUi from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";

const BoardWrite = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [activeBtn, setActiveBtn] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (
      event.target.value !== "" &&
      contents !== "" &&
      writer !== "" &&
      password !== ""
    ) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const onChangeContent = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (
      event.target.value !== "" &&
      title !== "" &&
      writer !== "" &&
      password !== ""
    ) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (
      event.target.value !== "" &&
      title !== "" &&
      contents !== "" &&
      password !== ""
    ) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (
      event.target.value !== "" &&
      title !== "" &&
      contents !== "" &&
      writer !== ""
    ) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const onClickSubmit = async (e) => {
    e.preventDefault();
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }

    try {
      if (writer && password && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        alert("게시물이 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <BoardWriteUi
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onClickSubmit={onClickSubmit}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      activeBtn={activeBtn}
    />
  );
};

export default BoardWrite;
