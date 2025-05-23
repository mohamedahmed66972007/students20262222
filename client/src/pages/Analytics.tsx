
import React from "react";
import { useFiles } from "@/hooks/useFiles";
import { useExams } from "@/hooks/useExams";
import { useQuizzes } from "@/hooks/useQuizzes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Analytics() {
  const { files } = useFiles();
  const { exams } = useExams();
  const { quizzes } = useQuizzes();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">تحليلات النظام</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>الملفات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{files?.length || 0}</p>
            <p className="text-sm text-muted-foreground">إجمالي عدد الملفات</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الاختبارات القصيرة</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{exams?.length || 0}</p>
            <p className="text-sm text-muted-foreground">إجمالي عدد الاختبارات القصيرة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الاختبارات الإلكترونية</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{quizzes?.length || 0}</p>
            <p className="text-sm text-muted-foreground">إجمالي عدد الاختبارات القصيرة</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
