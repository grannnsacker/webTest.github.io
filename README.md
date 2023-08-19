# webTest.github.io
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Emoji List with Stylish Switch Toggles</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
  .emoji-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .emoji-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .emoji {
    font-size: 24px;
    margin-right: 10px;
  }
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 20px;
    overflow: hidden;
  }
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .toggle-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    transition: 0.3s;
    transform: translateX(0);
  }
  .toggle-switch input:checked + .toggle-slider {
    background-color: #27ae60;
    transform: translateX(20px);
  }
</style>
</head>
<body>
  <div class="emoji-list">
    <div class="emoji-item">
      <span class="emoji">😀</span>
      <label class="toggle-switch">
        <input type="checkbox">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="emoji-item">
      <span class="emoji">🥰</span>
      <label class="toggle-switch">
        <input type="checkbox">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="emoji-item">
      <span class="emoji">😎</span>
      <label class="toggle-switch">
        <input type="checkbox">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <!-- Добавьте другие эмоджи и чекбоксы по аналогии -->
  </div>
</body>
</html>
