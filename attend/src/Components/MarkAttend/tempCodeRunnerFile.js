st res = await fetch("/api/absentstud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: currStudEmail,
        subjectName: currSubjArr,
        datee: datee,