// Function to create a new user
export const createUser = async (req, res) => {
    try {
        // Step 1: Extract data from the request body
        const { fullName, gender, voterId, voterIdProof, seat, category, income, DOB, firstTimeVoter } = req.body;

        // Step 2: Initialize a new User instance with the provided data
        const newUser = new User({
            fullName,
            gender,
            voterId,
            voterIdProof,
            seat,
            category,
            income,
            DOB,
            firstTimeVoter
        });

        // Step 3: Save the new user to the database
        await newUser.save();

        // Step 4: Send a success response with the newly created user data
        res.status(201).json({
            message: 'User created successfully!',
            user: newUser
        });
    } catch (error) {
        // Handle any errors, sending a 400 response with an error message
        res.status(400).json({
            message: 'Error creating user',
            error: error.message
        });
    }
};
