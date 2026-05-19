exports.analyzeComplaint = async (req, res) => {

    try {

        const { complaint } = req.body;

        let priority = "Low";
        let department = "General Department";

        if (
            complaint.toLowerCase().includes("water")
        ) {

            priority = "High";

            department = "Water Department";
        }

        else if (
            complaint.toLowerCase().includes("electricity")
        ) {

            priority = "High";

            department = "Electricity Department";
        }

        else if (
            complaint.toLowerCase().includes("garbage")
        ) {

            priority = "Medium";

            department = "Sanitation Department";
        }

        const summary =
            complaint.substring(0, 50);

        const autoResponse =
            "Your complaint has been registered successfully.";

        res.json({

            priority,

            department,

            summary,

            autoResponse

        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};