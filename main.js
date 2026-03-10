const binaryData = $input.item.binary;

// Fix the .oga extension to .ogg for OpenAI Whisper compatibility
for (const key of Object.keys(binaryData)) {
  if (binaryData[key].fileExtension === 'oga') {
    binaryData[key].fileExtension = 'ogg';
    binaryData[key].fileName = binaryData[key].fileName.replace('.oga', '.ogg');
    binaryData[key].mimeType = 'audio/ogg';
  }
}

return {
  json: $input.item.json,
  binary: binaryData,
};
