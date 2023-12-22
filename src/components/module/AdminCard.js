"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { sp } from "@/utils/replaceNumber";
import styles from "@/module/AdminCard.module.css";
import { Grid } from "@mui/material";
import { MdNoMeetingRoom } from "react-icons/md";

function AdminCard({
  data: { _id, title, description, location, price, pictures },
}) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <Grid
      item
      xs={12}
      container
      spacing={2}
      padding={"10px"}
      ml={2}
      pl={"0 !important"}
      className={styles.container}
    >
      <Grid item xs={12} md={3} className={styles.profileImageContainer}>
        <img src={pictures?.length ? pictures[0] : <MdNoMeetingRoom />} />
      </Grid>
      <Grid item xs={12} md={9}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.properties}>
          <span>{location}</span>
          <span>{sp(price)}</span>
        </div>
        <button onClick={publishHandler}>انتشار</button>
      </Grid>
      <Toaster />
    </Grid>
  );
}

export default AdminCard;
