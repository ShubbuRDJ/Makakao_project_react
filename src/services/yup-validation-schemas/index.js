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

export const signUpSchema = Yup.object({
    full_name: Yup.string()
        .required("Please enter the Full Name to move ahead")
        .min(3, "Full Name too short should contain at least 3 characters.")
        .max(30, "Full Name too long should contain at most 30 characters.")
    ,
    email: Yup.string()
        .required("Please enter the Email Address to move ahead")
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

export const addSellerBussinessSchema = Yup.object({
    business_name: Yup.string()
        .required("Please enter Bussiness Name to move ahead")
        .min(3, "Bussiness Name too short should contain at least 3 characters.")
    ,
    business_address: Yup.string()
        .required("Please enter Bussiness Address to move ahead")
        .min(3, "Bussiness Address too short should contain at least 3 characters.")
    ,
    tin_number: Yup.string()
        .required("Please enter Tin Number to move ahead")
        .min(3, "Tin Number too short should contain at least 3 characters.")
    ,
    iban_number: Yup.string()
        .required("Please enter Iban Number to move ahead")
        .min(3, "Iban Number too short should contain at least 3 characters.")
    ,
    bank_account_number: Yup.string()
        .required("Please enter Bank Account Number to move ahead")
        .min(14, "Bank Account Number too short should contain at least 14 characters.")
        .max(16, "Bank Account Number too long should contain at most 16 characters.")
    ,
    business_type: Yup.string()
        .required("Please select the Bussiness Type to move ahead")
    ,
});

export const addSellerProductSchema = Yup.object({
    product_name: Yup.string()
        .required("Please enter Product Name to move ahead")
        .min(3, "Product Name too short should contain at least 3 characters.")
    ,
    price: Yup.string()
        .required("Please enter Price to move ahead")
    ,
    short_desc: Yup.string()
        .required("Please enter Short Description to move ahead")
        .min(3, "Short Description too short should contain at least 3 characters.")
    ,
    desc: Yup.string()
        .required("Please enter Description to move ahead")
        .min(3, "Description too short should contain at least 3 characters.")
    ,
    price_unit: Yup.string()
        .required("Please select the Price Unit to move ahead")
    ,
});