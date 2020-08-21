import React from "react";
import { Button } from 'rebass';

export const OnSubmitNotifier = ({
  state, formName, exactName, submitted, formData, handleSubmit
}) => {
  const findByName = () => {
    return (state[formName].data
      .filter(e => e[exactName] === formData[exactName])
    )
  };
  const unfoldObject = (_obj) => {
    return (Object.entries(_obj).map(e => (
    <div>{e[0]} : {e[1]}</div>))
    )
  };
  return (
    <>
      <div>
        { submitted === false
          ? <h3> Нажми SUBMIT или ENTER чтобы сохранить
            заполненные данные о посчитать производные.</h3>
          : <h3> Данные успешно отправлены, нажмите ESC или
            крестик наверху. </h3>
        }
        <hr/>
        {
          (findByName().length !== 0)
          ? unfoldObject(findByName()[0])
          : unfoldObject(formData)
        }
        <hr/>
        { submitted === false
          ? <Button bg="two" onClick={handleSubmit}>Submit</Button>
          : <></>
        }
      </div>
    </>
  )
};
