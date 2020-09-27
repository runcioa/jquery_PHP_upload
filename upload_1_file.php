<?php

$phpFileUploadErrors = array(
  0 => 'There is no error, the file uploaded with success',
  1 => 'The uploaded file exceeds the upload_max_filesize directive in php.ini',
  2 => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form',
  3 => 'The uploaded file was only partially uploaded',
  4 => 'No file was uploaded',
  6 => 'Missing a temporary folder',
  7 => 'Failed to write file to disk.',
  8 => 'A PHP extension stopped the file upload.',
);


$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["file_1"]["name"]);

// echo $target_file;

if (move_uploaded_file($_FILES["file_1"]["tmp_name"], $target_file)) {
  // header("Content-Type:application/json");
  echo json_encode(
    array(
      "status" => 1,
      "message" => "The file " . $target_file . " has been uploaded."
    )
  );
} else {
  // header("Content-Type:application/json");
  $index = $_FILES["file_1"]['error'];

  echo json_encode(
    array(
      "status" => 0,
      "message" => $phpFileUploadErrors[$index]
    )
  );
}
