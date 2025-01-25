import * as Yup from "yup";


export const loginSchema = Yup.object({
    email: Yup.string()
        .required("Please enter the Email Address to move ahead")
        .email("Please enter a valid email address.")
    ,
    password: Yup.string()
        .required("Please enter the Password to move ahead")
        .min(8, "Password too short should contain at least 8 characters.")
        .max(30, "Password too long should contain at most 30 characters.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
            "Password must have length of at least 8 characters including at least one uppercase, one lowercase, one numeric value and one special character"
        ),
});

export const contactUsSchema = Yup.object({
    fName: Yup.string()
        .required("Please enter the First Name to move ahead")
        .min(3, "First Name too short should contain at least 3 characters.")
        .max(30, "First Name too long should contain at most 30 characters.")
    ,
    lName: Yup.string()
        .required("Please enter the Last Name to move ahead")
        .min(3, "Last Name too short should contain at least 3 characters.")
        .max(30, "Last Name too long should contain at most 30 characters.")
    ,
    email: Yup.string()
        .required("Please enter the Email ID to move ahead")
        .email("Please enter a valid email address.")
    ,
    phone: Yup.string()
        .required("Please enter the Phone Number to move ahead")
        .matches(
            /^[6-9]/,
            "Phone Number should start with 6, 7, 8, or 9."
        )
        .min(10, "Phone Number too short should contain at least 10 characters.")
        .max(10, "Phone Number too long should contain at most 10 characters.")
    ,
    comment: Yup.string()
        .required("Please enter the Comment to move ahead")
        .min(3, "Comment too short should contain at least 3 characters.")
    ,
});

export const addCategorySchema = Yup.object({
    name: Yup.string()
        .required("Please enter the Name to move ahead")
        .min(3, "Name too short should contain at least 3 characters.")
        .max(30, "Name too long should contain at most 30 characters.")
    ,
    description: Yup.string()
        .required("Please enter the Description to move ahead")
        .min(3, "Description too short should contain at least 3 characters.")
    ,
    category_icon: Yup.string()
        .required("Please select the Icon to move ahead")
    ,
});