export const formData = () => {
  const token = "37f4d5d4377097575b0104f8709ad37d";
  let formData = new FormData();

  let cpu = JSON.parse(localStorage.getItem("cpu"));

  formData.append("name", JSON.parse(localStorage.getItem("employee_name")));
  formData.append("surname", JSON.parse(localStorage.getItem("employee_surname")));
  formData.append("team_id", JSON.parse(localStorage.getItem("team_id")));
  formData.append("position_id", JSON.parse(localStorage.getItem("position_id")));
  formData.append("email", JSON.parse(localStorage.getItem("employee_email")));
  formData.append("phone_number", JSON.parse(localStorage.getItem("employee_phone")));
  formData.append("token", token);
  formData.append("laptop_name", JSON.parse(localStorage.getItem("laptop_name")));
  formData.append("laptop_brand_id", JSON.parse(localStorage.getItem("brand_id")));
  formData.append("laptop_cpu", cpu.name);
  formData.append("laptop_cpu_cores", JSON.parse(localStorage.getItem("cpu_cores")));
  formData.append("laptop_cpu_threads", JSON.parse(localStorage.getItem("cpu_threads")));
  formData.append("laptop_ram", JSON.parse(localStorage.getItem("ram")));
  formData.append("laptop_hard_drive_type", JSON.parse(localStorage.getItem("memory_type")));
  formData.append("laptop_purchase_date", JSON.parse(localStorage.getItem("purchase_date")));
  formData.append("laptop_price", JSON.parse(localStorage.getItem("laptop_price")));
  formData.append("laptop_state", JSON.parse(localStorage.getItem("laptop_condition")));

  return formData;
}

