import addCourseFormModel from './addCourseFormModel'
const {
  formField: {
    courseTitle,
    slug,
    price,
    description,
    img,
  }
} = addCourseFormModel;

export default {
  [courseTitle.name]: '',
  [slug.name]: '',
  [price.name]: '',
  [description.name]: '',
  [img.name]: '',
};