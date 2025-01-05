<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Details with Table</title>
</head>
<style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 18px;
            text-align: left;
        }
        table th, table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        table th {
            background-color: #f4f4f4;
        }
</style>
<body>
    <h1>User Details</h1>
    <?php
    // User details as a multidimensional array
    $users = [
        ["id" => 1, "name" => "Ravi", "age" => 23, "city" => "Delhi", "hobbies" => "Reading, Swimming"],
        ["id" => 2, "name" => "Sukanyaa", "age" => 25, "city" => "Mumbai", "hobbies" => "Cooking, Traveling"],
        ["id" => 3, "name" => "Anu", "age" => 22, "city" => "Kolkata", "hobbies" => "Cycling, Painting"],
        ["id" => 4, "name" => "Divyansha", "age" => 24, "city" => "Chennai", "hobbies" => "Music, Writing"],
    ];
    ?>

    <!-- User Details Table -->
    <table>
       
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Hobbies</th>
            </tr>
        
       
            <?php foreach ($users as $user) : ?>
                <tr>
                    <td><?= $user['id']; ?></td>
                    <td><?= $user['name']; ?></td>
                    <td><?= $user['age']; ?></td>
                    <td><?= $user['city']; ?></td>
                    <td><?= $user['hobbies']; ?></td>
                </tr>
            <?php endforeach; ?>
        
    </table>
</body>
</html>
