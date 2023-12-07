## Một số lưu ý về validation
- Mặc định chúng ta không cần phải custom message ở phía BE làm gì vì để cho FE tự validate và custom message phía FE cho đẹp
- Back-end chỉ cần validate đảm bảo dữ liệu chuẩn xác và trả về message mặc định từ thư viện là được
- Quan trọng là việc validate dữ liệu là bắt buộc phải có ở phía BE vì đây là điểm cuối để lưu trữ dữ liệu vào database
- Và thông thường trong thực tế, điều tốt nhất cho cả hệ thống là hãy luôn validate dữ liệu ở cả back-end và front-end

## Joi
1. Custom error message
https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages/68092831#68092831
https://github.com/hapijs/joi/blob/master/lib/types/string.js#L694

```js
  const correctCodition = Joi.object({
    title: Joi.string()
      .required()
      .min(3)
      .max(50)
      .trim()
      .strict()
      .messages({
        'any,required': 'Title is required'
      }),
    description: Joi.string()
      .required()
      .min(3)
      .max(256)
      .trim()
      .strict()
  });
```